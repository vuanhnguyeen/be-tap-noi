import { Hand, Heart, Star } from "lucide-react";
import { AppHeader } from "@/components/app-header";
import { HomeHeaderActions } from "@/components/home-header-actions";
import { TopicGrid } from "@/components/topic-grid";
import { TOPICS } from "@/data/topics";

export default function HomePage() {
  return (
    <main className="home-playground">
      <AppHeader
        title="Bé Tập Nói"
        subtitle="Bé học mỗi ngày, thêm nhiều điều hay"
        leftSlot={
          <div className="home-brand" aria-hidden="true">
            <span className="home-brand-glow" />
            <span className="home-brand-rainbow" />
            <span className="home-brand-cloud" />
            <span className="home-brand-smile" />
            <Star className="home-brand-star" />
            <span className="home-brand-dot home-brand-dot-one" />
            <span className="home-brand-dot home-brand-dot-two" />
          </div>
        }
        rightSlot={<HomeHeaderActions />}
      />

      <section className="home-discovery" aria-labelledby="home-heading">
        <div className="home-welcome">
          <span className="home-welcome-glow" aria-hidden="true" />
          <div className="home-welcome-copy">
            <span className="home-greeting"><Star size={16} aria-hidden="true" /> Chào bé yêu!</span>
            <h2 id="home-heading">Hôm nay bé muốn<br /><span>khám phá gì nào?</span></h2>
            <p><Hand size={18} aria-hidden="true" /> Chạm vào hình bé thích nhé!</p>
          </div>
          <div className="home-welcome-art" aria-hidden="true">
            <span className="home-welcome-ring" />
            <span className="home-cloud home-cloud-one" />
            <span className="play-sun home-sun"><i /><i /><span /></span>
            <Star className="home-welcome-star" />
            <span className="home-cloud home-cloud-two" />
            <span className="home-bubble home-bubble-one" />
            <span className="home-bubble home-bubble-two" />
          </div>
        </div>
        <TopicGrid topics={TOPICS} />
      </section>

      <footer className="home-footer"><Heart size={15} aria-hidden="true" /> Cùng ba mẹ, bé học thật vui.</footer>
    </main>
  );
}
