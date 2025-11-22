export function isObjectEmpty(obj) {
  return Object.values(obj).every(
    (v) =>
      !v ||
      (typeof v === "string" && v.trim() === "") ||
      (Array.isArray(v) && v.length === 0)
  );
}

