import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger} from "@nestjs/common";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";
import { GqlContextType, GqlExecutionContext } from "@nestjs/graphql";
import { stringify } from "querystring";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    private readonly logger: Logger = new Logger();
    public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const recordTime = Date.now();
        const requstType = context.getType<GqlContextType>();

        if(requstType === "http") {
            // Develop if needed
            return next.handle();
        } else if(requstType === "graphql") {
            // (1) Print request
            const gqlContext = GqlExecutionContext.create(context);
            this.logger.log(`${this.stringify(gqlContext.getContext().req.body)}`, 'Request');

            // (2) Error handling via graphql

            // (3) No Errors giving Response below
            return next.handle().pipe(
            tap((context) => {
                const responseTime = Date.now() - recordTime;
                this.logger.log(`${this.stringify(context)} - ${responseTime}ms \n\n`, 'Request');
    }),
    );
    }
} 
private stringify(context: ExecutionContext): string {
    return JSON.stringify(context).slice(0, 75);
}       
}

