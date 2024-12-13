import { Fade } from "react-awesome-reveal";

function HowCanFund() {
  return (
    <Fade cascade damping={0.1}>
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-center mt-14  bg-gray-600/5 rounded-md px-4 py-14">
        {/* Text Section */}
        <div className="flex-1 w-full">
          <h2 className="md:text-3xl text-2xl font-bold mb-4">
            How Can I Start Fundraising For Personal Needs?
          </h2>
          <p className=" mb-4 text-base leading-relaxed dark:text-neutral-200/80">
            One of the best ways to do personal fundraising is using a
            crowdfunding site. This type of fundraising allows individuals to
            raise money for their specific needs. Fundraising for personal
            reasons is not something that everyone should do for fun. As it
            involves a large number of people, it is essential that the cause
            must be significant enough for crowdfunding purposes.
          </p>
          <p className="dark:text-neutral-200/80 text-base leading-relaxed">
            Due to the evolution of crowdfunding, it has become more common for
            people to access personal fundraising websites. This allows them to
            gain deeper insight into their lives. WhyDonate is one of the most
            reliable personal fundraising websites to help you reach your goal
            seamlessly.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-6/12">
          <img
            src="https://i.ibb.co.com/8mqng46/w-596.png"
            alt="Fundraising illustration"
            className="w-full max-w-md  md:h-auto"
          />
        </div>
      </div>
    </Fade>
  );
}

export default HowCanFund;
