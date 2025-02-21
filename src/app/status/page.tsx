import PageLayout from "@/components/PageLayout";
import serviceData from "@/data/services.json";
import incidentData from "@/data/incidents.json";

export default function StatusPage() {
  return (
    <PageLayout 
      title="System Status" 
      description="Check the current status of our services"
    >
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceData.services.map((service) => (
            <div
              key={service.name}
              className="bg-white/80 dark:bg-amber-100/5 p-6 rounded-xl border border-amber-200/20 dark:border-amber-100/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`h-3 w-3 rounded-full ${
                    service.status === 'operational' ? 'bg-green-500' :
                    service.status === 'degraded' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                  <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200">
                    {service.name}
                  </h3>
                </div>
                <span className="text-amber-700/90 dark:text-amber-300/90">
                  {service.uptime}% uptime
                </span>
              </div>
              {service.message && (
                <p className="mt-2 text-amber-600/90 dark:text-amber-400/90 text-sm">
                  {service.message}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Recent Incidents</h2>
          <div className="space-y-4">
            {incidentData.incidents.map((incident) => (
              <div key={incident.date} className="border-l-2 border-amber-200 dark:border-amber-800 pl-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-amber-600/80 dark:text-amber-400/80 text-sm">
                    {incident.date}
                  </span>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    incident.status === 'resolved' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {incident.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-2">
                  {incident.title}
                </h3>
                <p className="text-amber-700/90 dark:text-amber-300/90">
                  {incident.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 