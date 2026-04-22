"use client"

export function FieldsSlider({ fields }: { fields: string[] }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-4 w-max animate-scroll">
        {[...fields, ...fields].map((field, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-6 py-3 rounded-full border border-[#c9a84c]/40 text-[#141829] text-sm font-medium bg-[#f8f5ec] hover:bg-[#efe6d2] transition-all duration-300"
          >
            {field}
          </span>
        ))}
      </div>
    </div>
  )
}