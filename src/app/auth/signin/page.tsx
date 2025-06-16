import { getProviders } from 'next-auth/react'
import { signIn } from 'next-auth/react'

function ProviderButtons({ providers }: { providers: Awaited<ReturnType<typeof getProviders>> }) {
  'use client'
  if (!providers) return null
  return (
    <div className="space-y-2">
      {Object.values(providers).map((provider) => (
        <button
          key={provider.id}
          onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Sign in with {provider.name}
        </button>
      ))}
    </div>
  )
}

export default async function SignInPage() {
  const providers = await getProviders()
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Sign In</h1>
      <ProviderButtons providers={providers} />
    </div>
  )
}
