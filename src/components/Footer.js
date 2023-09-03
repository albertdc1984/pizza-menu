export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const phrase =
    hour >= openHour && hour < closeHour
      ? "we are currently open"
      : "sorry, we are closed";

  return (
    <footer className="footer">
      It's {hour} o'clock, {phrase}
    </footer>
  );
}
