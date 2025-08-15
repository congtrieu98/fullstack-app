import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { GridBlock as GridBlockProps, Media as MediaType } from '@/payload-types'
import { cn } from '@/utilities/ui'

export const GridBlock: React.FC<GridBlockProps> = (props) => {
  const { items: postDataGrid } = props
  return (
    <div className="flex gap-3">
      <div className="px-4 py-5 w-3/4">
        <div className="flex justify-between pb-5">
          <div className="text-2xl text-gray-900 font-bold">Tin tức mới nhất</div>
          <div className="text-base text-primary-500 font-normal">Xem thêm</div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {postDataGrid?.map((post) => {
            const { image, content, title } = post
            const size = (image as MediaType).sizes?.thumbnail?.url
            return (
              <div key={post.id}>
                <Media
                  imgClassName={cn('border border-border rounded-[0.8rem] h-[300px]')}
                  resource={image}
                  size={size as string}
                  // src={staticImage}
                  className="pb-5"
                />
                <div className="text-2xl font-bold text-gray-900 leading-6 pb-3">{title}</div>
                <div className="">
                  {content && <RichText data={content} enableGutter={false} />}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="p-4 w-1/4">
        <div className="text-2xl text-gray-900 font-bold">Thông báo khẩn</div>
      </div>
    </div>
  )
}
