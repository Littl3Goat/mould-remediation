using System.Net;
using System.Net.Mail;
using MouldRemediation.Server.Models.Dtos;
using MouldRemediation.Server.Models.Emails;

namespace MouldRemediation.Server.Services;

public class EmailService
{
    private readonly IHostEnvironment _hostEnvironment;
    private readonly SmtpClient _smtpClient;
    private readonly string _botEmail;
    private readonly string _toEmail;
    private readonly string _ccEmail;

    public EmailService(IConfiguration config, IHostEnvironment hostEnvironment)
    {
        _hostEnvironment = hostEnvironment;

        var settings = config.GetSection("EmailSettings");
        _botEmail = settings.GetValue<string>("BotEmail") ?? "admin@constructionmouldremediation.com.au";
        _toEmail = settings.GetValue<string>("ToEmail") ?? "hhqbao@gmail.com";
        _ccEmail = settings.GetValue<string>("CcEmail") ?? "dream.tech.aus@outlook.com";

        _smtpClient = new SmtpClient(settings.GetValue<string>("Host"), settings.GetValue<int>("Port"))
        {
            Credentials = new NetworkCredential(_botEmail, settings.GetValue<string>("Password")),
            EnableSsl = false
        };
    }

    public async Task SendEnquiryAsync(NewEnquiryDto model)
    {
        using var message = new MailMessage(_botEmail, _toEmail);
        message.Subject = "[New Enquiry] Construction Mould Remediation";
        message.IsBodyHtml = true;
        message.Body = new NewEnquiryEmailTemplate(_hostEnvironment, model).ToHtml();

        message.CC.Add(_ccEmail);

        await _smtpClient.SendMailAsync(message);
    }
}