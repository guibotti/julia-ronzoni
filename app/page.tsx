import { ArrowDownRight, ArrowUpRight, Camera, Check, HeartPulse, Play, Sparkles } from 'lucide-react';

const instagramUrl = 'https://www.instagram.com/juliaronzoni/';
const ugcUrl = 'https://www.instagram.com/juronzoni.ugc/';
const columnUrl = 'https://simnoticias.com.br/nutrieco';
const content = [
  { image: './images/julia-editorial-1.jpg', label: 'Rotina & lifestyle' },
  { image: './images/julia-editorial-2.jpg', label: 'Bem-estar real' },
  { image: './images/julia-editorial-3.jpg', label: 'Conteúdo que conecta' },
  { image: './images/julia-editorial-4.jpg', label: 'Saúde sem complicação' },
];

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Navegação principal">
      <a href="#inicio" className="brand" aria-label="Início — Julia Ronzoni"><span>JULIA</span><i>Ronzoni</i></a>
      <div className="nav-links"><a href="#sobre">Sobre</a><a href="#conteudo">Conteúdo</a><a href="#parcerias">Parcerias</a></div>
      <a className="nav-cta" href={instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={15}/></a>
    </nav>

    <section className="hero shell" id="inicio">
      <div className="hero-copy">
        <div className="eyebrow"><span/> Nutrição, lifestyle & conteúdo</div>
        <h1>Conteúdo que <em>informa,</em><br/>conecta e vende.</h1>
        <p className="hero-lead">Nutricionista, colunista e creator. Eu transformo informação em histórias leves, relevantes e feitas para prender a atenção.</p>
        <div className="hero-actions">
          <a className="button primary" href={ugcUrl} target="_blank" rel="noreferrer">Quero criar com a Julia <ArrowUpRight size={18}/></a>
          <a className="text-link" href="#conteudo">Conheça meu trabalho <ArrowDownRight size={17}/></a>
        </div>
        <div className="social-proof" aria-label="Destaques do perfil">
          <div><strong>11K</strong><span>seguidores</span></div><div><strong>1.5K+</strong><span>conteúdos publicados</span></div><div><strong>BR · IT</strong><span>repertório multicultural</span></div>
        </div>
      </div>
      <div className="hero-visual" aria-label="Julia Ronzoni, nutricionista e criadora de conteúdo">
        <div className="shape shape-one"/><div className="shape shape-two"/><img src="./images/julia-editorial-3.jpg" alt="Julia Ronzoni"/>
        <div className="float-card float-top"><Sparkles size={16}/> Creator & UGC</div>
        <div className="float-card float-bottom"><span className="play"><Play size={14} fill="currentColor"/></span><span><b>Conteúdo autêntico</b><small>que parece conversa, não anúncio.</small></span></div>
      </div>
    </section>

    <section className="trust-strip"><div className="shell trust-inner"><span>Nutricionista</span><i>✦</i><span>Colunista SIM Notícias</span><i>✦</i><span>UGC Creator</span><i>✦</i><span>Brasil & Itália</span></div></section>

    <section className="about shell section" id="sobre">
      <div className="section-kicker">01 — SOBRE MIM</div>
      <div className="about-grid"><h2>Autoridade sem perder a <em>leveza.</em></h2><div className="about-copy">
        <p>Entre ciência, câmera e vida real, crio uma comunicação que aproxima. Levo informação nutricional confiável para uma linguagem que as pessoas realmente querem consumir.</p>
        <p>Para marcas, produzo conteúdo nativo, humano e estratégico — pensado para gerar identificação antes de pedir uma ação.</p>
        <a className="text-link dark" href={instagramUrl} target="_blank" rel="noreferrer">Acompanhar no Instagram <ArrowUpRight size={17}/></a>
      </div></div>
    </section>

    <section className="services section" id="parcerias"><div className="shell">
      <div className="section-kicker light">02 — COMO POSSO AJUDAR</div>
      <div className="services-heading"><h2>Uma criadora.<br/><em>Três potências.</em></h2><p>Estratégia, repertório e presença para transformar a mensagem da sua marca em conteúdo que merece ser assistido.</p></div>
      <div className="service-grid">
        <article><span className="service-number">01</span><Sparkles size={26}/><h3>UGC para marcas</h3><p>Vídeos orgânicos, reviews, demonstrações e narrativas criadas para anúncios e redes sociais.</p><ul><li><Check size={15}/> Roteiro e produção</li><li><Check size={15}/> Linguagem nativa</li><li><Check size={15}/> Foco em retenção</li></ul></article>
        <article><span className="service-number">02</span><HeartPulse size={26}/><h3>Nutrição & bem-estar</h3><p>Conteúdo acessível sobre escolhas, hábitos e saúde — com responsabilidade e conexão.</p><ul><li><Check size={15}/> Conteúdo educativo</li><li><Check size={15}/> Colunas e matérias</li><li><Check size={15}/> Participações em mídia</li></ul></article>
        <article><span className="service-number">03</span><Camera size={26}/><h3>Publis & collabs</h3><p>Parcerias alinhadas ao universo de lifestyle, beleza, esporte, viagens e alimentação.</p><ul><li><Check size={15}/> Reels e stories</li><li><Check size={15}/> Cobertura de eventos</li><li><Check size={15}/> Experiência real</li></ul></article>
      </div>
    </div></section>

    <section className="work shell section" id="conteudo">
      <div className="work-head"><div><div className="section-kicker">03 — CONTEÚDO RECENTE</div><h2>Vida real,<br/><em>bem contada.</em></h2></div><a className="button outline" href={instagramUrl} target="_blank" rel="noreferrer">Ver todos no Instagram <ArrowUpRight size={18}/></a></div>
      <div className="content-grid">{content.map((item,index)=><a href={instagramUrl} target="_blank" rel="noreferrer" className="content-card" key={item.image}><img src={item.image} alt={item.label}/><span>{String(index+1).padStart(2,'0')}</span><div><small>CONTEÚDO</small><b>{item.label}</b></div><ArrowUpRight size={20}/></a>)}</div>
    </section>

    <section className="column-cta shell"><div><span className="pill">NUTRI&CO.</span><h2>Saúde boa é saúde<br/><em>que você entende.</em></h2><p>Leia a coluna de Julia no portal SIM Notícias: informação prática sobre nutrição, bem-estar e estilo de vida.</p></div><a className="round-link" href={columnUrl} target="_blank" rel="noreferrer" aria-label="Ler a coluna Nutri&Co"><ArrowUpRight size={28}/></a></section>

    <section className="final-cta" id="contato"><div className="shell final-inner"><span className="section-kicker light">VAMOS CONVERSAR?</span><h2>Sua próxima campanha<br/>pode começar <em>aqui.</em></h2><p>Conte a sua ideia. Eu transformo em conteúdo com rosto, voz e intenção.</p><a className="button cream" href={ugcUrl} target="_blank" rel="noreferrer">Falar com a Julia <ArrowUpRight size={18}/></a></div></section>

    <footer className="footer shell"><div className="brand"><span>JULIA</span><i>Ronzoni</i></div><p>Nutrição · Lifestyle · Conteúdo</p><div><a href={instagramUrl} target="_blank" rel="noreferrer">@juliaronzoni</a><a href={ugcUrl} target="_blank" rel="noreferrer">@juronzoni.ugc</a></div></footer>
  </main>;
}
