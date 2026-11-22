import SignupForm from "@/components/SignupForm";
import { cohort } from "@/lib/site";

/**
 * The cohort's main call to action. With a Stripe Payment Link set in lib/site.ts it is a "Buy my seat"
 * button. Until then, or once seats run out, it is a signup form that goes to the Cohort sheet.
 */
export default function CohortBuy({ placement, onDark }: { placement: string; onDark?: boolean }) {
  const soldOut = cohort.seatsLeft === 0;
  const canBuy = cohort.stripePaymentLink !== "#" && !soldOut;

  if (canBuy) {
    return (
      <div className="buy-block">
        <a className="btn btn-lg" href={cohort.stripePaymentLink} data-placement={placement}>
          Buy my seat{cohort.seatPrice ? ` · ${cohort.seatPrice}` : ""}
        </a>
        <p className={`small ${onDark ? "" : "muted"}`}>
          Secure checkout by Stripe. After you pay, you&apos;ll take the 2-minute cohort survey.
        </p>
      </div>
    );
  }

  return (
    <div className="buy-block">
      <SignupForm
        list="apex-cohort"
        placement={`cohort-${placement}`}
        cta={soldOut ? "Join the waitlist" : "Reserve my seat"}
      />
      <p className={`small ${onDark ? "" : "muted"}`}>
        {soldOut
          ? "Founding seats are sold out. We'll email you if one opens up."
          : "Seat sales open soon. Reserve now and you'll be first to get the checkout link."}
      </p>
    </div>
  );
}
