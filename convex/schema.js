import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    tokenIdentifier: v.string(), //clerk user ID for auth
    imageUrl: v.optional(v.string()), //profile picture
    username: v.optional(v.string()), //unique username for public profile

    // activity timestamps
    createdAt: v.number(),
    lastActiveAt: v.number(),
  })
    .index('by_token', ['tokenIdentifier'])
    .index('by_email', ['email']) // Email lookups
    .index('by_username', ['username']) // Username lookup for public profile
    .searchIndex('search_name', { searchField: 'name' }) // User search
    .searchIndex('search_email', { searchField: 'email' }),
});
