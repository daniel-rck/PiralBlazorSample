using DesignSystem.Extensions;
using Microsoft.Extensions.DependencyInjection;

namespace BlazorSamplePilet;

public class Module
{
    public static void Main()
    {
        // this should remain empty
    }

    public static void ConfigureServices(IServiceCollection services)
    {
        services.AddConsoleMessageService()
            .AddComponentLibServices();

        // Localization
        services.AddLocalization();
    }
}