import { IonIcon } from "@ionic/react";

const Features = () => {
  return (
    <div className="w-full sm:w-11/12 mx-auto py-20">
      <div className="flex items-center gap-5 justify-between flex-wrap mb-10">
        <h3 className="font-semibold text-2xl">
          We Provide the Most Unique <br /> and Modern Features
        </h3>
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Aliquid quo praesentium maxime saepe!
        </p>
      </div>
      <div className="overflow-hidden responsive-grid mx-auto">
        <div className="p-6 grid gap-3 border border-zinc-300">
          <IonIcon name="sparkles-sharp" size="large" />
          <p className="font-semibold text-lg">
            Increase Output and Productivity
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi omnis
            consequatur deserunt tempore at vel mollitia debitis placeat commodi
            quis!
          </p>
          <button className="mt-6 ml-auto">
            <i className="fa-solid fa-circle-arrow-right text-2xl"></i>
          </button>
        </div>
        <div className="p-6 grid gap-3 border border-zinc-300">
          <IonIcon name="sparkles-sharp" size="large" />
          <p className="font-semibold text-lg self-start">
            Accessible Anywhere and Anytime
          </p>
          <p className="text-sm self-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi omnis
            consequatur deserunt tempore at vel mollitia debitis placeat commodi
            quis!
          </p>
          <button className="mt-6 ml-auto">
            <i className="fa-solid fa-circle-arrow-right text-2xl"></i>
          </button>
        </div>
        <div className="p-6 grid gap-3 border border-zinc-300">
          <IonIcon name="sparkles-sharp" size="large" />
          <p className="font-semibold text-lg">
            Empower team members and make them execute work
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi omnis
            consequatur deserunt tempore at vel mollitia debitis placeat commodi
            quis!
          </p>
          <button className="mt-6 ml-auto">
            <i className="fa-solid fa-circle-arrow-right text-2xl"></i>
          </button>
        </div>
        <div className="p-6 grid gap-3 border border-zinc-300">
          <IonIcon name="sparkles-sharp" size="large" />
          <p className="font-semibold text-lg">
            Increase Output and Productivity
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi omnis
            consequatur deserunt tempore at vel mollitia debitis placeat commodi
            quis!
          </p>
          <button className="mt-6 ml-auto">
            <i className="fa-solid fa-circle-arrow-right text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
