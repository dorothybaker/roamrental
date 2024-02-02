export default function Footer() {
  return (
    <section className="sm:px-6 py-6 pt-2 px-3 border-t mt-6">
      <div className="max-w-7xl mx-auto flex justify-between items-start gap-3 md:flex-nowrap flex-wrap">
        <div className="flex flex-col gap-1 md:flex-1">
          <h1 className="font-bold text-2xl">RoamRental</h1>
          <p className="text-sm text-gray-600 font-semibold">
            Our Vision is to make a world where people feel at home no matter
            where they are, can make life better.
          </p>
          <p className="text-sm">Room Rental will save you all the stress.</p>
        </div>
        <div className="md:flex-1 flex md:justify-end md:items-end flex-col">
          <h3 className="text-xl font-semibold">Information</h3>
          <p>123 Code Street, Programming</p>
          <ul className="flex gap-2 text-sm">
            <li>Properties</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
