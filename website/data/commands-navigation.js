export default [
  'index',
  {
    category: 'acl',
    content: [
      {
        category: 'auth-method',
        content: ['create', 'delete', 'list', 'read', 'update'],
      },
      {
        category: 'binding-rule',
        content: ['create', 'delete', 'list', 'read', 'update'],
      },
      'bootstrap',
      {
        category: 'policy',
        content: ['create', 'delete', 'list', 'read', 'update'],
      },
      {
        category: 'role',
        content: ['create', 'delete', 'list', 'read', 'update'],
      },
      'set-agent-token',
      {
        category: 'token',
        content: ['clone', 'create', 'delete', 'list', 'read', 'update'],
      },
      'translate-rules',
    ],
  },
  'agent',
  { category: 'catalog', content: ['datacenters', 'nodes', 'services'] },
  { category: 'config', content: ['delete', 'list', 'read', 'write'] },
  { category: 'connect', content: ['ca', 'proxy', 'envoy', 'expose'] },
  'debug',
  'event',
  'exec',
  'force-leave',
  'info',
  {
    category: 'intention',
    content: ['check', 'create', 'delete', 'get', 'match'],
  },
  'join',
  'keygen',
  'keyring',
  {
    category: 'kv',
    content: ['delete', 'export', 'get', 'import', 'put'],
  },
  'leave',
  'license',
  'lock',
  'login',
  'logout',
  'maint',
  'members',
  'monitor',
  {
    category: 'namespace',
    content: ['create', 'delete', 'list', 'read', 'update', 'write'],
  },
  {
    category: 'operator',
    content: ['area', 'autopilot', 'raft'],
  },
  'reload',
  'rtt',
  { category: 'services', content: ['register', 'deregister'] },
  {
    category: 'snapshot',
    content: ['agent', 'inspect', 'restore', 'save'],
  },
  { category: 'tls', content: ['ca', 'cert'] },
  'validate',
  'version',
  'watch',
]