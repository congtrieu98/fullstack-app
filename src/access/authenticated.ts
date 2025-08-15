import type { AccessArgs } from 'payload'
import type { Auth } from '@/payload-types' // Cập nhật type

type isAuthenticated = (args: AccessArgs<Auth>) => boolean

export const authenticated: isAuthenticated = ({ req: { user } }) => {
  return Boolean(user)
}
