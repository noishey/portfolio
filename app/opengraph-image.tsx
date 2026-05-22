import { ImageResponse } from 'next/og'

export const alt = 'noishey'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: '#000000',
            border: '6px solid rgba(255, 255, 255, 0.15)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
