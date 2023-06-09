import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { convertDateToReadableDate } from "@/helpers/date-conversion";
import { PostData } from "@/helpers/posts-util";

interface PostItemGridComponentUiProps {
  posts: PostData;
}

function PostItemGridComponentUi(props: PostItemGridComponentUiProps) {
  const { slug, title, image, excerpt, date } = props.posts;
  const formattedDate = convertDateToReadableDate(date);

  return (
    <Card sx={{ display: "flex" }}>
      <CardActionArea sx={{ flexDirection: "column" }}>
        <Link href={`/posts/${slug}`}>
          <CardMedia
            sx={{ position: "relative", height: { xs: 200, md: 250 } }}
          >
            <Image
              style={{ objectFit: "cover" }}
              src={`/images/posts/${slug}/${image}`}
              alt="Getting Started with NextJS"
              fill
            />
          </CardMedia>
          <CardContent>
            <Typography variant="h5" component="h3">
              {title}
            </Typography>
            <Typography
              variant="overline"
              component="time"
              color="text.secondary"
            >
              {formattedDate}
            </Typography>
            <Typography paragraph>{excerpt}</Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}

export default PostItemGridComponentUi;
