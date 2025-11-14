const hero = document.querySelector(".hero")

console.log(hero__content)

hero__content.innerHTML = `
    <section class="hero" aria-labelledby="titulo-comic">
      <div class="hero__bg" style="background-image: url('portada_principal.jpg');"></div>
      <div class="hero__overlay"></div>

      <div class="hero__content">
        <div class="hero__meta">
          <span class="tag">Drama musical</span>
          <span class="dot">•</span>
          <span class="tag">2025</span>
          <span class="dot">•</span>
          <span class="tag">3 capítulos</span>
        </div>

        <h1 id="titulo-comic" class="hero__title">La Princesa Ronca de Oro</h1>

        <p class="hero__desc">
          Helena, una princesa nacida bajo una tormenta, desafía las normas de su reino para seguir su verdadera pasión: el canto.
          A través de su voz enfrenta prejuicios, amores y traiciones; su legado trascenderá el tiempo como símbolo de libertad y
          empoderamiento femenino.
        </p>

        <div class="hero__actions">
          <button class="btn btn--primary">Reproducir</button>
        </div>

        <div class="hero__meta-low">
          <span><strong>Autores:</strong> Juan, Caleb y Geraldine</span>
        </div>
      </div>
    </section>
    `