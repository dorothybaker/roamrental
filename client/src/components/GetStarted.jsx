export default function GetStarted() {
  return (
    <section className="mt-3">
      <div className="max-w-5xl mx-auto sm:px-6 px-4 flex justify-center items-center bg-blue-600 py-10 rounded-lg border-4 border-blue-200">
        <div className="flex flex-col gap-4 items-center justify-center text-white text-center">
          <h3 className="text-2xl font-bold">Get started with RoamRental</h3>
          <div className="flex flex-col justify-center items-center">
            <span>
              Reach out to us to find the most attractive properties while on
              travel!
            </span>
            <span>You can as well RoamRental your place.</span>
          </div>
          <button className="font-medium px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg transition-all ease-in-out hover:scale-105 border-2 border-blue-200">
            <a href="mailto:roamrental@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
}
