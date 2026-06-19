
import Image from "next/image";

export default function DDoSProject() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <a
        href="/"
        className="text-blue-600"
      >
        ← Back to Portfolio
      </a>

      <h1 className="text-5xl font-bold mt-6">
        Real-Time DDoS Detection System
      </h1>

      <p className="mt-6 text-slate-600 text-lg">
        Machine Learning powered cyber-security platform
        designed to detect suspicious network activity
        and potential DDoS attacks in real time.
      </p>

      <div className="mt-10">
        <Image
          src="/images/ddos1.jpeg"
          alt="DDoS Dashboard"
          width={1200}
          height={700}
          className="rounded-2xl"
        />
      </div>

      <h2 className="text-3xl font-semibold mt-16">
        Overview
      </h2>

      <p className="mt-4 text-slate-700 leading-8">
        Developed a real-time intrusion detection
        platform using Machine Learning and network
        traffic analytics. The system continuously
        monitors traffic, extracts features, and
        predicts whether traffic is normal or malicious.
      </p>

      <h2 className="text-3xl font-semibold mt-16">
        Technologies
      </h2>

      <div className="flex flex-wrap gap-3 mt-4">
        <span className="bg-slate-100 px-3 py-2 rounded">Python</span>
        <span className="bg-slate-100 px-3 py-2 rounded">Flask</span>
        <span className="bg-slate-100 px-3 py-2 rounded">Streamlit</span>
        <span className="bg-slate-100 px-3 py-2 rounded">Random Forest</span>
        <span className="bg-slate-100 px-3 py-2 rounded">Isolation Forest</span>
      </div>

      <h2 className="text-3xl font-semibold mt-16">
        Key Features
      </h2>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Real-time traffic monitoring</li>
        <li>Threat prediction using ML</li>
        <li>Interactive dashboard</li>
        <li>Traffic analytics</li>
        <li>Cyber threat detection</li>
      </ul>

      <a
        href="https://github.com/iamshaikabbas/network-intrusion-detection-system"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-10 bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        View GitHub Repository
      </a>

    </main>
  );
}
