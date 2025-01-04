import BenefitsSection from "@/src/components/sharedPages/benefits";
import Container from "@/src/components/UI/Container";

export default async function RecentPosts() {
  return (
    <div className="section-title my-8">
      <h2 className="mb-2 text-center text-2xl">
        {" "}
        All Services From Our Company{" "}
      </h2>
      <p className="text-center text-3xl py-6">
        Discover, review, and rate your favorite service. Join a community of
        car service lovers and share your experiences.
      </p>

      <BenefitsSection />
    </div>
  );
}
