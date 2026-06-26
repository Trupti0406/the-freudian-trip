export default function WorkshopEnquiryForm() {
  return (
    <div className="watercolor-card flex h-full flex-col gap-4 px-7 py-8">
      <h3 className="display text-2xl text-mauve">Workshop enquiry</h3>

      <p className="text-sm text-foreground/65">
        Share a few details about your organisation or group.
      </p>

      <form className="flex flex-col gap-4">
        <label className="mt-2 block text-xs tracking-wide text-foreground/60">
          Name
          <input
            required
            name="name"
            className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm outline-none"
          />
        </label>

        <label className="block text-xs tracking-wide text-foreground/60">
          Email
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm outline-none"
          />
        </label>

        <label className="block text-xs tracking-wide text-foreground/60">
          Organisation / Institution
          <input
            name="organisation"
            className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm outline-none"
          />
        </label>

        <label className="block text-xs tracking-wide text-foreground/60">
          Additional details
          <textarea
            rows={4}
            name="details"
            placeholder="Tell me about your goals, audience, or any specific requirements..."
            className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm outline-none"
          />
        </label>

        <button
          type="button"
          className="mt-3 rounded-full bg-mauve px-5 py-2.5 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Submit enquiry
        </button>
      </form>
    </div>
  );
}
