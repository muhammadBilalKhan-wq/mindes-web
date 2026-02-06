type AuthFieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
};

export const AuthField = ({ id, label, type = 'text', placeholder }: AuthFieldProps) => (
  <label htmlFor={id} className="flex flex-col gap-2 text-sm text-neutral-700">
    <span className="font-medium tracking-[0.01em]">{label}</span>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="h-11 rounded-2xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 outline-none transition focus:border-neutral-500 focus:ring-2 focus:ring-neutral-100"
    />
  </label>
);
