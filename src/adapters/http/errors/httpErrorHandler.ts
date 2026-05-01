import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { ApplicationError } from "../../../application/errors/ApplicationError.js";
import { ConflictError } from "../../../application/errors/ConflictError.js";
import { NotFoundError } from "../../../application/errors/NotFoundError.js";
import { InvalidPostUpdateError } from "../../../domain/post/PostErrors.js";

/**
 * Global Fastify error handler.
 *
 * Responsibilities:
 * - Convert known application errors into HTTP responses.
 * - Prevent leaking internal error details to clients.
 * - Provide a stable error contract for the API layer.
 *
 * IMPORTANT:
 * - This handler is part of the HTTP adapter.
 * - It must not contain business logic.
 */
export function httpErrorHandler(
  error: FastifyError | Error,
  request: FastifyRequest,
  reply: FastifyReply
): void {
  /**
   * 🔴 DOMAIN ERRORS (añadido)
   */
  if (error instanceof InvalidPostUpdateError) {
    reply.status(400).send({
      error: "INVALID_POST_UPDATE",
      message: error.message,
    });
    return;
  }

  /**
   * Known application-layer errors.
   */
  if (error instanceof ApplicationError) {
    if (error instanceof NotFoundError) {
      reply.status(404).send({
        error: error.code,
        message: error.message,
      });
      return;
    }

    if (error instanceof ConflictError) {
      reply.status(409).send({
        error: error.code,
        message: error.message,
      });
      return;
    }

    reply.status(400).send({
      error: error.code,
      message: error.message,
    });
    return;
  }

  /**
   * Unexpected errors.
   */
  request.log.error({ err: error }, "Unhandled HTTP error");

  reply.status(500).send({
    error: "INTERNAL_SERVER_ERROR",
    message: "Unexpected server error",
  });
}