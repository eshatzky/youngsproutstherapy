import Image from "next/image";

export function IssuesWeHelpCouples() {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium ~text-2xl/3xl text-primary">
          Issues We Help Couples Resolve
        </h2>
        <p className="leading-6">
          Couples therapy at Young Sprouts Therapy addresses a wide range of
          relational challenges. Whether you&apos;re struggling with
          communication breakdowns, emotional disconnection, or betrayal, our
          therapists are here to help.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <Image
            src={"/svg/magicicon.svg"}
            alt="icon"
            width={48}
            height={45}
            className="w-3 h-3 aspect-auto"
          />
          <p>Communication Breakdowns</p>
        </div>
        <p className="leading-6">
          Many couples struggle with communication, especially when they feel
          misunderstood or disconnected. We provide tools to improve
          communication, helping you and your partner listen, express yourselves
          clearly, and resolve conflicts more effectively.
        </p>

        <div className="flex items-center gap-2.5">
          <Image
            src={"/svg/magicicon.svg"}
            alt="icon"
            width={48}
            height={45}
            className="w-3 h-3 aspect-auto"
          />
          <p>Emotional Disconnection</p>
        </div>
        <p className="leading-6">
          Over time, many couples experience emotional distance, which can lead
          to feelings of loneliness or dissatisfaction. Our therapists work with
          you to rebuild emotional intimacy, helping you reconnect on a deeper
          level.
        </p>
        <div className="flex items-center gap-2.5">
          <Image
            src={"/svg/magicicon.svg"}
            alt="icon"
            width={48}
            height={45}
            className="w-3 h-3 aspect-auto"
          />
          <p>Infidelity and Betrayal</p>
        </div>
        <p className="leading-6">
          Recovering from infidelity can be one of the most difficult challenges
          a couple faces. Through therapy, we help you navigate the painful
          emotions of betrayal, rebuild trust, and explore whether
          reconciliation is possible for your relationship.
        </p>
        <div className="flex items-center gap-2.5">
          <Image
            src={"/svg/magicicon.svg"}
            alt="icon"
            width={48}
            height={45}
            className="w-3 h-3 aspect-auto"
          />
          <p>Work-Life Balance and Family Stress</p>
        </div>
        <p className="leading-6">
          Balancing the demands of work, family, and personal life can create
          tension in relationships. We provide strategies to help couples manage
          stress, establish healthy boundaries, and support each other in
          maintaining a balanced life.
        </p>
      </div>
    </article>
  );
}
