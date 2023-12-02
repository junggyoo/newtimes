import { Chip } from '@/components/Chip';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';

export default function HomePage() {
  return (
    <>
      <Header>
        <Chip startContent={<Icon name="HOME" />}>전체 헤드라인</Chip>
        <Chip color="primary">전체 날짜</Chip>
        <Chip>전체 국가</Chip>
      </Header>
      <section
        style={{
          height: '100%',
        }}
      >
        <div>기사기사기사</div>
      </section>
    </>
  );
}
