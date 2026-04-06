export default function HeroCard({ image, translate, hidden }) {
  return (
    <div className={`cardHero h-full object-cover ${translate} ${hidden}`}>
      <img src={image} className="h-full w-full object-cover" />
    </div>
  )
}