// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 1) إضافة المستخدمين دفعة واحدة
  await prisma.user.createMany({
    data: [
      { email: 'admin@vario.com', name: 'Administrator', role: 'admin' },
      { email: 'user@vario.com',  name: 'Customer',      role: 'customer' }
    ],
    skipDuplicates: true,   // يتجاهل أيّ صفوف بنفس email
  });

  // 2) إضافة المنتجات دفعة واحدة
  await prisma.product.createMany({
    data: [
      { name: 'Product A', description: 'Description A', price: 9.99 },
      { name: 'Product B', description: 'Description B', price: 19.99 },
      { name: 'Product C', description: 'Description C', price: 29.99 },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Seed completed');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
