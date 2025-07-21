using System.ComponentModel.DataAnnotations;

namespace MouldRemediation.Server.Models.Dtos;

public class NewEnquiryDto
{
    [Required]
    public string Name { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    public string Phone { get; set; }

    [Required]
    public string Service { get; set; }

    public string Message { get; set; }
}