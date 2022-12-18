import { Card, Grid, Image, Link, Text } from "@nextui-org/react";

interface ProgramProps {
  name: string;
  logo: string;
  site: string;
  desc: string;
  down: string;
}

export default function Program(props: ProgramProps) {
  return (
    <Card css={{ p: "$6" }}>
      <Card.Header>
        <Image
          alt={`${props.name} logo`}
          src={props.logo}
          width="34px"
          height="34px"
          showSkeleton
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {props.name}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{props.site}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>{props.desc}</Text>
      </Card.Body>
      <Card.Footer>
        <Link color="primary" target="_blank" href={props.down}>
          Download
        </Link>
      </Card.Footer>
    </Card>
  );
}
