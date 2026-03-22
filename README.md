# EnsinAI — Landing Page

Landing page institucional da **EnsinAI**, plataforma de aulas particulares online que conecta alunos a professores especialistas em diversas disciplinas.

## Visão Geral

Página estática desenvolvida com HTML, CSS e JavaScript puro — sem frameworks, sem dependências externas. Focada em performance, acessibilidade e experiência visual moderna.

## Estrutura do Projeto

```
ensinai-landingpage/
├── index.html      # Estrutura e conteúdo da página
├── styles.css      # Design system e todos os estilos
└── script.js       # Interatividade (vanilla JS)
```

## Seções

| Seção | Descrição |
|---|---|
| **Navbar** | Menu fixo com scroll effect e menu mobile hamburger |
| **Hero** | Headline principal, CTAs, cards de professores animados e badges flutuantes |
| **Social Proof** | Contador animado de estatísticas da plataforma |
| **Como Funciona** | 3 passos ilustrados com conectores animados |
| **Funcionalidades** | Grid de features da plataforma |
| **Para Professores** | Seção dedicada a monetização e ferramentas para professores |
| **Disciplinas** | Grade de matérias disponíveis |
| **Depoimentos** | Cards de avaliações de alunos e professores |
| **FAQ** | Perguntas frequentes em accordion |
| **CTA Final** | Chamada para ação com links para o portal e app |
| **Footer** | Links institucionais e redes sociais |

## Tecnologias

- **HTML5** semântico com atributos de acessibilidade (ARIA)
- **CSS3** com custom properties (design system completo), animações e layout responsivo via Grid e Flexbox
- **JavaScript** vanilla (ES5+, IIFE, sem dependências)

## Funcionalidades JS

- Navbar com efeito de scroll (`navbar--scrolled`)
- Menu mobile hamburguer com toggle e fechamento automático ao navegar
- Animações de entrada via `IntersectionObserver` (`[data-animate]`)
- Contador animado nos números da seção de social proof

## Design System

Todas as variáveis de design estão definidas em `:root` no `styles.css`:

- **Paleta**: Indigo (`#4F46E5`) como cor primária, Violet como secundária
- **Tipografia**: `Inter`, fallback para fontes do sistema
- **Espaçamento**: escala de 4px (`--space-1` a `--space-24`)
- **Border-radius**: escala de `sm` a `full`
- **Sombras**: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`

## Responsividade

Breakpoints definidos no CSS:

| Breakpoint | Alvo |
|---|---|
| `≤ 1024px` | Tablets |
| `≤ 768px` | Mobile |
| `≤ 375px` | Mobile pequeno |

## Como Rodar

Não há build step. Basta abrir o `index.html` diretamente no navegador ou servir com qualquer servidor estático:

```bash
# Com Python
python3 -m http.server 3000

# Com Node.js (npx)
npx serve .
```

Acesse `http://localhost:3000`.

## Acessibilidade

- Atributos `aria-label`, `aria-expanded` e `aria-hidden` aplicados
- Hierarquia de headings semântica (`h1` → `h3`)
- Textos alternativos em todas as imagens
- Navegação possível via teclado
- Contraste de cores dentro do padrão WCAG AA
