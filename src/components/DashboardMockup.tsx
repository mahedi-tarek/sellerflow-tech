export function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="absolute -inset-4 rounded-2xl bg-brand/5 blur-2xl" />
      <div className="relative overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-brand/10">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-[#f3f4f6] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="mx-auto rounded-md bg-white px-4 py-1 text-xs text-muted">
            app.sellerflow.tech/dashboard
          </div>
        </div>

        <div className="flex min-h-[340px]">
          {/* Sidebar */}
          <div className="hidden w-44 shrink-0 border-r border-border bg-[#fafafa] p-4 sm:block">
            <div className="mb-6 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand text-xs font-bold text-white">
                SF
              </span>
              <span className="text-xs font-semibold">SellerFlow</span>
            </div>
            <nav className="space-y-1">
              {[
                { label: "Inbox", active: true, badge: "12" },
                { label: "Orders", active: false, badge: "8" },
                { label: "Inventory", active: false },
                { label: "Courier", active: false },
                { label: "Accounting", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between rounded-md px-2.5 py-2 text-xs ${
                    item.active
                      ? "bg-brand-light font-semibold text-brand-dark"
                      : "text-muted"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="rounded-full bg-brand px-1.5 py-0.5 text-[10px] font-bold text-white">
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Main content */}
          <div className="flex flex-1 flex-col">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Unified Inbox
                </p>
                <p className="text-xs text-muted">
                  Facebook · Instagram · WhatsApp
                </p>
              </div>
              <span className="rounded-full bg-brand-light px-2.5 py-1 text-[10px] font-semibold text-brand-dark">
                AI draft ready
              </span>
            </div>

            <div className="flex flex-1">
              {/* Conversation list */}
              <div className="w-1/3 border-r border-border">
                {[
                  {
                    name: "Fatima R.",
                    channel: "WhatsApp",
                    preview: "আপু, XL size আছে?",
                    time: "2m",
                    unread: true,
                  },
                  {
                    name: "Rahim S.",
                    channel: "Messenger",
                    preview: "COD te pathaben?",
                    time: "8m",
                    unread: true,
                  },
                  {
                    name: "Nusrat A.",
                    channel: "Instagram",
                    preview: "Order confirm kore dilam",
                    time: "15m",
                    unread: false,
                  },
                ].map((convo) => (
                  <div
                    key={convo.name}
                    className={`border-b border-border px-3 py-3 ${
                      convo.unread ? "bg-brand-light/40" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold">{convo.name}</span>
                      <span className="text-[10px] text-muted">{convo.time}</span>
                    </div>
                    <p className="mt-0.5 truncate text-[10px] text-muted">
                      {convo.preview}
                    </p>
                    <span className="mt-1 inline-block rounded bg-white px-1.5 py-0.5 text-[9px] text-muted ring-1 ring-border">
                      {convo.channel}
                    </span>
                  </div>
                ))}
              </div>

              {/* Chat pane */}
              <div className="flex flex-1 flex-col p-4">
                <div className="space-y-3">
                  <div className="max-w-[75%] rounded-lg rounded-tl-none bg-[#f0f0f0] px-3 py-2">
                    <p className="text-[11px] text-foreground">
                      Assalamu alaikum, XL size ta koto?
                    </p>
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-lg rounded-tr-none bg-brand px-3 py-2 text-white">
                    <p className="text-[11px]">
                      Wa alaikum assalam! XL stock e ache, 850 BDT.
                    </p>
                  </div>
                </div>

                <div className="mt-auto rounded-lg border border-dashed border-brand/40 bg-brand-light/50 p-3">
                  <p className="text-[10px] font-semibold text-brand-dark">
                    AI Draft (Bangla)
                  </p>
                  <p className="mt-1 text-[10px] text-muted">
                    &quot;Haan apu, XL available. COD te pathate pari — Steadfast
                    diye. Confirm korle order create kore dicchi.&quot;
                  </p>
                  <div className="mt-2 flex gap-2">
                    <span className="rounded bg-brand px-2 py-1 text-[9px] font-semibold text-white">
                      Send draft
                    </span>
                    <span className="rounded border border-border bg-white px-2 py-1 text-[9px] text-muted">
                      Edit first
                    </span>
                  </div>
                  <p className="mt-2 text-[9px] text-muted/80">
                    Price &amp; stock replies require seller confirmation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
