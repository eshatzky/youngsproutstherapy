export function BlobSection() {
  return (
    <section className="max-w-[1080px] mx-auto ~py-16/20 ~px-4/0">
      <div className="flex lg:flex-row flex-col gap-4 justify-between">
        <div className="shadow py-5 px-14 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#0196AF]">Address</h2>
          <p className="text-[#0196AF] font-medium">
            1137 Centre Street Suite #204
          </p>
          <p className="text-[#0196AF] font-medium">Thornhill, ON, L4J 3M6</p>
        </div>
        <div className="shadow py-5 px-14 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#0196AF]">Contact</h2>
          <p className="text-[#0196AF] font-medium">
            info@youngsproutstherapy.com
          </p>
          <p className="text-[#0196AF] font-medium">289-579-4769 (GROW)</p>
        </div>
        <div className="shadow py-5 px-14 rounded-lg">
          <h2 className="text-2xl min-w-16 font-bold mb-6 text-[#0196AF]">
            Opening Hours
          </h2>
          <p className="text-[#0196AF] font-medium">
            <span className="min-w-16"> Monday - Thursday:</span>{" "}
            <span>9:00 am - 9:00 pm</span>
          </p>
          <p className="text-[#0196AF] font-medium">
            <span className="min-w-16">Friday:</span>{" "}
            <span> 9:00 am – 3:00 pm</span>
          </p>
          <p className="text-[#0196AF] font-medium">Saturday: Closed</p>
          <p className="text-[#0196AF] font-medium">
            <span className="min-w-16">Sunday:</span> 9:00 am – 9:00 pm
          </p>
        </div>
      </div>
    </section>
  );
}
