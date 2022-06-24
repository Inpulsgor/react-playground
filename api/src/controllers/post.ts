import { Request, Response } from "express";
import { PostModel } from "../models";

class PostController {
  async getPosts(req: Request, res: Response) {
    try {
      const posts = await PostModel.find().populate("author").exec();

      res.json(posts);
    } catch (error) {
      console.log("error", error);

      res.status(500).json({
        message: "Getting articles failed",
      });
    }
  }

  async getPost(req: Request, res: Response) {
    try {
      const postId = req.params.id;

      PostModel.findOneAndUpdate(
        {
          _id: postId,
        },
        {
          $inc: { views: 1 },
        },
        {
          returnDocument: "after",
        },
        (err, doc) => {
          if (err) {
            console.log("error", err);

            res.status(500).json({
              message: "Error on getting article",
            });
          }

          if (!doc) {
            return res.status(404).json({
              message: "Article not found",
            });
          }

          res.json(doc);
        },
      );
    } catch (error) {
      console.log("error", error);

      res.status(500).json({
        message: "Getting articles failed",
      });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const doc = new PostModel({
        title: req.body.title,
        text: req.body.text,
        tags: req.body.tags,
        views: req.body.views,
        author: req.userId,
        imageUrl: req.body.imageUrl,
      });

      const post = await doc.save();

      res.json(post);
    } catch (error) {
      console.log("error", error);

      res.status(500).json({
        message: "Create new post failed",
      });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const postId = req.params.id;

      PostModel.findOneAndDelete(
        {
          _id: postId,
        },
        (err: any, doc: any) => {
          if (err) {
            console.log("error", err);

            res.status(500).json({
              message: "Aricle delete failded",
            });
          }

          if (!doc) {
            res.status(500).json({
              message: "Aricle not faund",
            });
          }

          res.json({
            success: true,
          });
        },
      );
    } catch (error) {
      console.log("error", error);

      res.status(500).json({
        message: "Error on post delete",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const postId = req.params.id;

      await PostModel.updateOne(
        {
          _id: postId,
        },
        {
          title: req.body.title,
          text: req.body.text,
          tags: req.body.tags,
          views: req.body.views,
          author: req.userId,
          imageUrl: req.body.imageUrl,
        },
      );

      res.json({
        success: true,
      });
    } catch (error) {
      console.log("error", error);

      res.status(500).json({
        message: "Error on article update",
      });
    }
  }
}

export default new PostController();
