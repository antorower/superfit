export default function Map() {
  return (
    <div className="">
      <div className="w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d100574.25100886292!2d23.62933240935442!3d38.025053647137696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x14a1a3e381db9437%3A0x9e35f4460a2b8e44!2sDimitsanas%2013%2C%20Ilion%20131%2022%2C%20Greece!3m2!1d38.025082399999995!2d23.7117334!5e0!3m2!1sen!2s!4v1728610618311!5m2!1sen!2s"
          className="w-full h-full rounded-lg"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
