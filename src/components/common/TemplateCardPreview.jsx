const TemplateCardPreview = ({ meta }) => {
  return (
    <div className="min-h-90 bg-white rounded-xl shadow-lg border-1 border-zinc-300">
      <img src={meta.image} className="object-cover object-center" alt="" />
      <p className="text-center p-3 font-bold">{meta.name}</p>
    </div>
  );
};

export default TemplateCardPreview;
