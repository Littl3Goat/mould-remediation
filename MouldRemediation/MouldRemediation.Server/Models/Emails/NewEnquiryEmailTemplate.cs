using MouldRemediation.Server.Models.Dtos;

namespace MouldRemediation.Server.Models.Emails
{
    public class NewEnquiryEmailTemplate(IHostEnvironment hostEnvironment, NewEnquiryDto model)
    {
        public string ToHtml()
        {
            var filePath = Path.Combine(hostEnvironment.ContentRootPath, "EmailTemplates\\NewEnquiry.html");

            var html = File.ReadAllText(filePath);

            html = html.Replace("??Name??", model.Name);
            html = html.Replace("??Email??", model.Email);
            html = html.Replace("??Phone??", model.Phone);
            html = html.Replace("??Service??", model.Service);
            html = html.Replace("??Message??", model.Message);

            return html;
        }
    }
}
