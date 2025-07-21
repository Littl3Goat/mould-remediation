using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MouldRemediation.Server.Models.Dtos;
using MouldRemediation.Server.Services;

namespace MouldRemediation.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnquiriesController(EmailService emailService) : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Create(NewEnquiryDto model)
        {
            await emailService.SendEnquiryAsync(model);

            return Ok();
        }
    }
}
