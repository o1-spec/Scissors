function Pricing() {
  return (
    <>
      <section className="pt-12 pb-8" id="pricing">
        <div className="text-center">
          <h4 className="pb-5 text-4xl font-semibold">
            <span className="line"></span>A{" "}
            <span className="text-blue">price perfect</span> for your needs
          </h4>
          <p className="text-center max-w-[600px] mx-auto my-0 text-base">
            From catering for your personal, business, event, socials needs, you
            can be rest assured we have you in mind in our pricing.
          </p>
        </div>
        <div className="max-w-[1100px] my-0 mx-auto translate-x-24 pt-16 pl-7 pb-7">
          <div className="flex items-center">
            <div className="border border-blue border-r-0 max-w-fit rounded-md pt-7 pr-8 pb-8 pl-16">
              <p className="text-xl pb-4">Basic</p>
              <h6 className="text-4xl font-extrabold pb-4">Free</h6>
              <p className="text-xl">Free for all users</p>
              <div className="flex flex-col gap-y-5 pt-4">
                <div className="flex items-center gap-3">
                  <img src="./images/check-circle.svg" alt="check-circle" />
                  <span className="text-sm">URL Shortening</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="./images/check-circle.svg" alt="check-circle" />
                  <span className="text-sm">Basic Link Analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="./images/check-circle.svg" alt="check-circle" />
                  <span className="text-sm">Customizable Short Links</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="./images/check-circle.svg" alt="check-circle" />
                  <span className="text-sm">Standard Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="./images/check-circle.svg" alt="check-circle" />
                  <span className="text-sm">Add Supported</span>
                </div>
              </div>
            </div>
            <div className="max-w-fit text-white rounded-md py-20 px-12 bg-[#1E3448]">
              <p className="text-lg">Professional</p>
              <h6 className="text-3xl font-semibold pb-3 pt-3">$15/ month</h6>
              <p className="text-xl">Ideal for business creators</p>
              <div className="flex flex-col gap-y-5 pt-4">
                <div className="flex items-center gap-3">
                  <img src="./images/check-circle (1).svg" alt="check-circle" />
                  <span className="text-sm">Enhanced Link Analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="./images/check-circle (1).svg" alt="check-circle" />
                  <span className="text-sm">Custom Branded Domains</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="./images/check-circle (1).svg" alt="check-circle" />
                  <span className="text-sm">Advanced Link Customization</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="./images/check-circle (1).svg" alt="check-circle" />
                  <span className="text-sm">Priority Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="./images/check-circle (1).svg" alt="check-circle" />
                  <span className="text-sm">Ad-free Experience</span>
                </div>
              </div>
            </div>
            <div className="border border-blue border-l-0 rounded-md pt-7 pr-10 pb-8 pl-12">
              <p className="text-xl pb-4">Teams</p>
              <h6 className="text-4xl font-extrabold pb-4">25$/month</h6>
              <p className="text-xl">Share with up to 10 users</p>
              <div className="flex flex-col gap-y-5 pt-4">
                <div className="flex items-center gap-3">
                  <img src="./images/check-circle.svg" alt="check-circle" />
                  <span className="text-sm">Team Collaboration</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="./images/check-circle.svg" alt="check-circle" />
                  <span className="text-sm">User Roles and Permissions</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="./images/check-circle.svg" alt="check-circle" />
                  <span className="text-sm">Enhance Security</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="./images/check-circle.svg" alt="check-circle" />
                  <span className="text-sm">API Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="./images/check-circle.svg" alt="check-circle" />
                  <span className="text-sm">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-7 flex justify-center gap-5">
          <a href="#" className="rounded-xl transition duration-300 text-blue py-2 px-5 text-sm border border-blue">
            Get Custom Pricing
          </a>
          <a
            href="#"
            className="bg-blue text-sm text-white border border-blue transition hover:bg-white hover:text-blue duration-300 py-2 px-5 rounded-xl"
          >
            Select Pricing
          </a>
        </div>
      </section>
    </>
  );
}

export default Pricing;
