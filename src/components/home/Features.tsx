import { Activity, AlertTriangle, Stethoscope } from "lucide-react";

const Features = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose MedAI Assistant?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <Stethoscope className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
          <p className="text-muted-foreground">
            Advanced AI models trained on medical data to provide accurate
            insights
          </p>
        </div>
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <Activity className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Real-time Guidance</h3>
          <p className="text-muted-foreground">
            Get instant responses and personalized recommendations 24/7
          </p>
        </div>
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Safety First</h3>
          <p className="text-muted-foreground">
            Built with medical safety guidelines and clear disclaimers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
