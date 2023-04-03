import { Box, Typography } from "@mui/material";

import PostGridComponentUi from "@/components/ui/posts/post-grid";

import { Post } from "@/types";

interface FeaturedPostComponentProps {
  data: Post[];
}

function FeaturedPostComponent(props: FeaturedPostComponentProps) {
  const { data } = props;

  return (
    <Box component="section" sx={{ mx: 4, my: 4 }}>
      <Typography variant="h4" component="h2" align="center">
        FEATURED POSTS
      </Typography>
      <PostGridComponentUi posts={data} />
    </Box>
  );
}

export default FeaturedPostComponent;
