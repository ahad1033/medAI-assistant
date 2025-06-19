const HowItWorks = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
            1
          </div>
          <h3 className="text-xl font-semibold mb-2">Choose Your Service</h3>
          <p className="text-muted-foreground">
            Select from our range of AI-powered health services tailored to your
            needs
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
            2
          </div>
          <h3 className="text-xl font-semibold mb-2">Share Your Information</h3>
          <p className="text-muted-foreground">
            Provide relevant details about your symptoms, health goals, or
            concerns
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
            3
          </div>
          <h3 className="text-xl font-semibold mb-2">Get AI Insights</h3>
          <p className="text-muted-foreground">
            Receive personalized recommendations and guidance from our AI
            assistant
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
