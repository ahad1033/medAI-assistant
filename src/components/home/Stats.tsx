import React from "react";

const Stats = () => {
  return (
    <div className="mb-16 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
          <div className="text-muted-foreground">Active Users</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-green-600 mb-2">1M+</div>
          <div className="text-muted-foreground">Health Consultations</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
          <div className="text-muted-foreground">Available Support</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
          <div className="text-muted-foreground">User Satisfaction</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
