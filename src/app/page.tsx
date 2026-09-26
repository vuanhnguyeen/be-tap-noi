import { Hand, Heart, Star } from "lucide-react";
import { AppHeader } from "@/components/app-header";
import { HomeHeaderActions } from "@/components/home-header-actions";
import { TopicGrid } from "@/components/topic-grid";
import { TOPICS } from "@/data/topics";

export default function HomePage() {
  return (
    <main className="home-playground">
      <AppHeader
        title="Bé Học Nói"
        subtitle="Mỗi ngày, thêm một điều hay"
        leftSlot={
          <div className="home-brand" aria-hidden="true">
            <span className="play-sun"><i /><i /><span /></span>
          </div>
        }
        rightSlot={<HomeHeaderActions />}
      />

      <section className="home-discovery" aria-labelledby="home-heading">
        <div className="home-welcome">
          <div className="home-welcome-copy">
            <span className="home-greeting"><Star size={16} aria-hidden="true" /> Chào bé yêu!</span>
            <h2 id="home-heading">Hôm nay bé muốn<br /><span>khám phá gì nào?</span></h2>
            <p><Hand size={18} aria-hidden="true" /> Chạm vào hình bé thích nhé!</p>
          </div>
          <div className="home-welcome-art" aria-hidden="true">
            <span className="home-cloud home-cloud-one" />
            <span className="play-sun home-sun"><i /><i /><span /></span>
            <Star className="home-welcome-star" />
            <span className="home-cloud home-cloud-two" />
          </div>
        </div>
        <TopicGrid topics={TOPICS} />
      </section>

      <footer className="home-footer"><Heart size={15} aria-hidden="true" /> Cùng ba mẹ, bé học thật vui.</footer>
    </main>
  );
}
