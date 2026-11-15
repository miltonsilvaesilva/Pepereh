# Guia — aparecer no Google (Search Console + Perfil de Empresa)
Tempo total: ~20 minutos. Tudo gratuito. Usar a conta Google do geral@pepereh.com.

---

## Parte 1 — Google Search Console (o site aparecer nas pesquisas)

1. Abrir **https://search.google.com/search-console** e entrar com geral@pepereh.com.
2. **Adicionar propriedade** → escolher **Domínio** (caixa da esquerda) → escrever `pepereh.com` → **Continuar**.
3. O Google mostra um texto do tipo `google-site-verification=XXXXXXXX`. **Copiar** esse texto.
4. Noutra janela, abrir a Squarespace: **https://account.squarespace.com/domains** → pepereh.com → **DNS** → **Configurações de DNS** → **Adicionar registo**:
   | Tipo | Nome | TTL | Dados |
   |---|---|---|---|
   | TXT | `@` | 4 horas | `google-site-verification=XXXXXXXX` (o texto copiado) |
   ⚠️ Não apagar nenhum registo existente (MX, SPF, DKIM, DMARC, A, www).
5. Voltar ao Search Console → **Verificar**. Se der erro, esperar 10–30 minutos e tentar de novo.
6. Depois de verificado: menu **Sitemaps** → escrever `https://pepereh.com/sitemap.xml` → **Enviar**.
7. Menu **Inspecção de URL** → escrever `https://pepereh.com/` → **Pedir indexação**.

O Google pode demorar alguns dias a mostrar o site nas pesquisas. No Search Console vai ver, com o tempo, que pesquisas levam as pessoas ao site.

---

## Parte 2 — Perfil de Empresa no Google (Google Maps e pesquisas locais)

1. Abrir **https://business.google.com** → **Gerir agora** / **Adicionar empresa**.
2. **Nome da empresa:** `PEPEREH`
3. **Categoria principal:** `Empresa de software` (ou «Consultor de informática»). Categorias adicionais: `Consultor empresarial`, `Loja de informática`.
4. **Quer adicionar uma localização que os clientes possam visitar?** → **Não** (enquanto o atendimento presencial não estiver confirmado). Assim a morada fica escondida.
5. **Área de serviço:** `Angola` (ou Luanda + províncias onde actuam).
6. **Contactos:** telefone `+244 946 325 774` · site `https://pepereh.com`.
7. **Verificação:** o Google escolhe o método (vídeo da empresa, chamada, email ou carta). Seguir as instruções — se pedir vídeo, mostrar o logótipo/material da empresa e o local de trabalho.
8. Depois de verificado, completar:
   - **Horário:** segunda a sexta, 10:00–17:00
   - **Descrição** (até 750 caracteres):
     > A PEPEREH – Comércio e Serviços, Lda. é uma empresa angolana, sediada em Luanda, que combina tecnologia, consultoria, comércio e desenvolvimento de negócios para criar soluções práticas e orientadas para resultados. Desenvolvemos software, aplicações móveis, websites, sistemas de gestão (ERP) e soluções de interoperabilidade e Janela Única; apoiamos empresas e instituições em planeamento estratégico, estudos de viabilidade e melhoria de processos; e fornecemos equipamentos informáticos, de rede e material de escritório. Trabalhamos em todo o território angolano. Ideias que se tornam realidade.
   - **Serviços:** as 5 áreas do site
   - **Logótipo:** perfil-pepereh-1080.png · **Capa:** capa-facebook-1640x856.jpg
   - **Data de abertura:** 2025
9. Pedir aos clientes satisfeitos que deixem uma **avaliação** no Google (o link aparece em «Pedir avaliações»). Nunca oferecer nada em troca de avaliações.

---

## Depois de tudo feito
Avisar o Claude: actualiza-se o site com o link do Perfil de Empresa e acompanha-se o Search Console na revisão mensal.
