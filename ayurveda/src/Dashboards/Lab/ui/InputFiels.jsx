export default function InputField({ label, ...props }) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{label}</label>
      <input {...props} className="border rounded px-4 py-2 w-full focus:ring-green-500" />
    </div>
  );
}
