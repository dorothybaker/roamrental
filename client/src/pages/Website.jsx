import Hero from "../components/Hero";
import Companies from "../components/Companies";
import Residencies from "../components/Residencies";
import Value from "../components/Value";
import Contact from "../components/Contact";
import GetStarted from "../components/GetStarted";

export default function Website() {
  return (
    <div>
      <div className="bg-black">
        <Hero />
      </div>
      <div className="flex flex-col gap-8 mt-6 mb-3">
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
      </div>
    </div>
  );
}
