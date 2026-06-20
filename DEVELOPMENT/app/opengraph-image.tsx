// Branded Open Graph image, generated with the Next.js opengraph-image convention
// and the ImageResponse API. Dark navy in the brand palette, the wordmark, the
// tagline, and a subtle node motif that echoes the logo.

import { ImageResponse } from 'next/og';

export const alt = 'Synergistic Interaction, Practical AI adoption for Australian business';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
          background: 'linear-gradient(135deg, #060d1a 0%, #0a1628 55%, #0c1e3a 100%)',
        }}
      >
        {/* Node motif, echoing the logo triangle of connected nodes */}
        <svg
          width="460"
          height="460"
          viewBox="0 0 460 460"
          style={{ position: 'absolute', top: '-60px', right: '-40px' }}
        >
          <circle cx="230" cy="230" r="200" stroke="#00c9a7" strokeWidth="2" fill="none" opacity="0.18" />
          <line x1="230" y1="80" x2="360" y2="350" stroke="#00c9a7" strokeWidth="2" opacity="0.35" />
          <line x1="230" y1="80" x2="100" y2="350" stroke="#00c9a7" strokeWidth="2" opacity="0.35" />
          <line x1="100" y1="350" x2="360" y2="350" stroke="#00c9a7" strokeWidth="2" opacity="0.35" />
          <line x1="230" y1="80" x2="230" y2="230" stroke="#00c9a7" strokeWidth="2" opacity="0.3" />
          <line x1="360" y1="350" x2="230" y2="230" stroke="#00c9a7" strokeWidth="2" opacity="0.3" />
          <line x1="100" y1="350" x2="230" y2="230" stroke="#00c9a7" strokeWidth="2" opacity="0.3" />
          <circle cx="230" cy="80" r="12" fill="#00c9a7" />
          <circle cx="360" cy="350" r="12" fill="#00c9a7" opacity="0.8" />
          <circle cx="100" cy="350" r="12" fill="#00c9a7" opacity="0.8" />
          <circle cx="230" cy="230" r="15" fill="#00c9a7" />
        </svg>

        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '9999px',
                background: '#00c9a7',
                marginRight: '20px',
              }}
            />
            <div style={{ fontSize: '66px', fontWeight: 700, color: '#f0f4f8', letterSpacing: '-0.02em' }}>
              Synergistic Interaction
            </div>
          </div>
          <div style={{ fontSize: '32px', color: '#8fa3ba', marginTop: '28px', maxWidth: '760px' }}>
            Practical AI adoption for Australian business
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
