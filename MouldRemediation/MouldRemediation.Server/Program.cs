using MouldRemediation.Server.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors();
builder.Services.AddControllers();

builder.Services.AddSingleton<EmailService>();

var app = builder.Build();

app.UseCors(opt => opt.WithOrigins("https://localhost:5000", "https://constructionmouldremediation.com.au").AllowAnyHeader().AllowAnyMethod());
app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
