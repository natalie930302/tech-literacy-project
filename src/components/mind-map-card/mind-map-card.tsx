import Link from "next/link";
import { IconHandClick } from "@tabler/icons-react";

interface MindMapNode {
  title: string;
  href?: string;
  subnodes?: MindMapNode[];
}
interface RecursiveMindMapNodeProps {
  node: MindMapNode;
  depth: number;
}
const RecursiveMindMapNode: React.FC<RecursiveMindMapNodeProps> = ({
  node,
  depth,
}) => {
  if (depth > 10) {
    return null;
  }
  return (
    <li className="children-item">
      {node.href ? (
        <Link href={node.href || ""} className="btn flex items-center gap-1">
          <div dangerouslySetInnerHTML={{ __html: node.title || "" }} />
          <IconHandClick className="size-5 stroke-1.5 fill-white shrink-0" />
        </Link>
      ) : (
        <div className="btn shrink-0">
          <div dangerouslySetInnerHTML={{ __html: node.title || "" }} />
        </div>
      )}
      {node.subnodes && (
        <ol className="children">
          {node.subnodes.map((subnode, idx) => (
            <RecursiveMindMapNode key={idx} node={subnode} depth={depth + 1} />
          ))}
        </ol>
      )}
    </li>
  );
};
interface MindMapCardProps {
  title: string;
  href?: string;
  nodes: MindMapNode[];
  bgClass: string;
  shadowClass: string;
}
const MindMapCard: React.FC<MindMapCardProps> = ({
  title,
  href,
  nodes,
  bgClass,
  shadowClass,
}) => (
  <div
    className={`mind-map w-fit text-sm md:text-base p-0 ${bgClass} ${shadowClass}`}
  >
    {href ? (
      <Link href={href || ""} className="bt flex items-center gap-1">
        <div dangerouslySetInnerHTML={{ __html: title || "" }} />
        <IconHandClick className="size-5 stroke-1.5 fill-white shrink-0" />
      </Link>
    ) : (
      <div className="btn shrink-0">
        <div dangerouslySetInnerHTML={{ __html: title || "" }} />
      </div>
    )}
    <ol className="children">
      {nodes.map((node, index) => (
        <RecursiveMindMapNode key={index} node={node} depth={0} />
      ))}
    </ol>
  </div>
);

export default MindMapCard;
