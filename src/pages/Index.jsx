import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-400 flex flex-col items-center justify-center space-y-10 p-10">
      <header className="text-center">
        <h1 className="text-5xl font-bold neon-text">Kotani Labs</h1>
        <p className="text-xl mt-4">Pioneering Open Source Web 3 Development</p>
      </header>

      <Separator className="bg-cyan-400" />

      <section className="w-full max-w-4xl">
        <Card className="bg-gray-900 text-cyan-400">
          <CardHeader>
            <CardTitle className="text-2xl">Our Services</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Node Validation</li>
              <li>DeFi</li>
              <li>Roll Ups</li>
              <li>Roll Ups as a Service</li>
              <li>Decentralized Sequencers</li>
              <li>Zero Knowledge Technology</li>
              <li>The Intersection of Crypto and AI</li>
              <li>Layer 2 EVM Technology</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="bg-cyan-400" />

      <section className="w-full max-w-4xl">
        <Card className="bg-gray-900 text-cyan-400">
          <CardHeader>
            <CardTitle className="text-2xl">Internship Program</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our 3-month internship program is designed for web 2 software developers transitioning to web 3, as well as beginner and intermediate developers in web 3. Learn and grow in areas such as Solidity, Rust-based frameworks, and more.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="bg-cyan-400" />

      <section className="w-full max-w-4xl">
        <Card className="bg-gray-900 text-cyan-400">
          <CardHeader>
            <CardTitle className="text-2xl">Horizon Hackerhouse Program</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              In partnership with Aya Collective, the Horizon Hackerhouse Program offers a unique opportunity for developers to immerse themselves in the world of web 3. Join us and be part of the future of technology.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;