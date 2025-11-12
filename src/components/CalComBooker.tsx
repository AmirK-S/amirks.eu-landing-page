import { BookerEmbed } from "@calcom/atoms";

interface CalComBookerProps {
  username: string;
  eventSlug: string;
  view?: "month_view" | "week_view" | "column_view";
  onSuccess?: () => void;
}

const CalComBooker = ({
  username,
  eventSlug,
  view = "month_view",
  onSuccess
}: CalComBookerProps) => {
  return (
    <div className="w-full" style={{ minHeight: '800px' }}>
      <BookerEmbed
        eventSlug={eventSlug}
        username={username}
        view={view}
        customClassNames={{
          bookerContainer: "border-subtle border rounded-xl",
        }}
        onCreateBookingSuccess={() => {
          console.log("Booking created successfully");
          if (onSuccess) {
            onSuccess();
          }
        }}
      />
    </div>
  );
};

export default CalComBooker;
